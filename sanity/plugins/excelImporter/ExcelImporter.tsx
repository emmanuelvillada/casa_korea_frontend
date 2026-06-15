import { useState } from 'react'
import { useClient } from 'sanity'
import * as XLSX from 'xlsx'

interface Row {
    Código?: string | number
    Nombre?: string
    Precio?: number | string
    Precio_con_descuento?: number | string
    Existencia?: number | string
    'Descripción'?: string
}

function toSlug(text: string) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // quita tildes
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
}

export function ExcelImporter() {
    const client = useClient({ apiVersion: '2024-01-01' })
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<string[]>([])

    async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) return

        setLoading(true)
        setErrors([])
        setStatus('Leyendo archivo...')

        const buffer = await file.arrayBuffer()
        const workbook = XLSX.read(buffer)
        const sheet = workbook.Sheets[workbook.SheetNames[0]]
        const rows = XLSX.utils.sheet_to_json<Row>(sheet)

        // Debug: ver qué columnas tiene el Excel
        if (rows.length > 0) {
            console.log('Columnas detectadas:', Object.keys(rows[0]))
            console.log('Primera fila:', rows[0])
        }

        setStatus(`Importando ${rows.length} repuestos...`)

        const transaction = client.transaction()
        const rowErrors: string[] = []

        for (const row of rows) {
            const nombre = row.Nombre?.trim()
            const codigo = String(row.Código ?? '').trim()

            if (!nombre) {
                console.log('Fila sin nombre, se omitirá:', row)
                rowErrors.push(`Fila sin nombre (código: ${codigo})`)
                continue
            }
            const id = `repuesto-${codigo.replace(/[^a-zA-Z0-9_-]/g, '-')}`

            transaction.createOrReplace({
                _type: 'repuesto',
                _id: id,
                nombre,
                slug: {
                    _type: 'slug',
                    current: toSlug(nombre),
                },
                sku: codigo,
                precio: Number(row.Precio) || 0,
                precioDescuento: Number(row.Precio_con_descuento) || 0,
                descripcion: String(row['Descripción'] ?? ''),
                stock: Number(row.Existencia) || 0,
            })
        }

        try {
            const result = await transaction.commit()
            console.log('Resultado:', result)
            setErrors(rowErrors)
            setStatus(`✅ ${result.results.length} repuestos importados correctamente`)
        } catch (err) {
            console.error('Error al importar:', err)
            setStatus(`❌ Error al importar`)
            setErrors([String(err)])
        }

        setLoading(false)
    }

    return (
        <div style={{ padding: 32, maxWidth: 600 }}>
            <h2>Importar Repuestos desde Excel</h2>
            <p style={{ color: '#666' }}>
                Columnas esperadas: <code>Código, Nombre, Precio, Precio_con_descuento, Existencia, Descripción</code>
            </p>
            <input
                title="Seleccionar archivo Excel"
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFile}
                disabled={loading}
            />
            {status && (
                <p style={{ marginTop: 16, fontWeight: 'bold' }}>{status}</p>
            )}
            {errors.length > 0 && (
                <ul style={{ color: 'red', marginTop: 8 }}>
                    {errors.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
            )}
        </div>
    )
}
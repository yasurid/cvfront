import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import AppLayout from "@/components/Layouts/AppLayout";
import DataTable from 'react-data-table-component';


export default function Add() {
    const { user } = useAuth({ middleware: 'guest' });
    const all = useAuth({ middleware: 'user' });

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Manage Users
                </h2>
            }>

            <Head>
                <title>Manage Users</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <DataTable
                                columns={columns}
                                data={all}
                                selectableRows
                                pagination
                                fixedHeader
                                fixedHeaderScrollHeight="300px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { USERS } from "../../../FakeData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProfileContext } from "../../../ContextApi/ProfileContext";
import { useSearchParams } from "react-router-dom";
import ProfileDetails from "../PeopleDetail/ProfileDetails";
import DebounceSearch from "./DebounceSearch";

const Directory = () => {
    const columnHelper = createColumnHelper()
    const { setProfileDetails } = useContext(ProfileContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const columns = [
        columnHelper.accessor("avatar", {
            cell: (info) => (
                <Link onClick={() => handleClick(info.row.original)}><img src={info?.getValue()} alt="profile-pic" className="rounded-full w-10 h-10 object-cover hover:bg-gray-50" /></Link>
            ),
            header: "Profile"
        }),
        columnHelper.accessor("name", {
            cell: (info) => <Link onClick={() => handleClick(info.row.original)}><span>{info.getValue()}</span></Link>,
            header: "Full Name"
        }),
        columnHelper.accessor("status", {
            cell: (info) => <Link onClick={() => handleClick(info.row.original)}><span className="marker:text-sky-400 border rounded-lg text-green-600 px-2 hover:bg-gray-50">{info.getValue()}</span></Link>,
            header: "Status"
        }),
        columnHelper.accessor("role", {
            cell: (info) => <Link onClick={() => handleClick(info.row.original)}><span className="hover:bg-gray-50">{info.getValue()}</span></Link>,
            header: "Role"
        }),
        columnHelper.accessor("email", {
            cell: (info) => <Link onClick={() => handleClick(info.row.original)}><span className="hover:bg-gray-50">{info.getValue()}</span></Link>,
            header: "Email-Id"
        }),
        columnHelper.accessor("team", {
            cell: (info) => <Link onClick={() => handleClick(info.row.original)}><span className="px-2 text-violet-600 border rounded-lg hover:bg-gray-50">{info.getValue()}</span></Link>,
            header: "Teams"
        }),
        columnHelper.accessor("Delete", {
            id: "delete",
            cell: (info) => <button
                onClick={() => window.confirm('Parmanently Delete User?') ?
                    setData(data.filter((newdata) => newdata.userId !== info.row.original.userId)) : null
                }>
                <i className="fa-solid fa-trash-can py-3 px-3 hover:bg-gray-50 text-red-500"></i></button>
        }),
        // columnHelper.accessor("Edit", {
        //     id: "edit",
        //     cell: (info) => <Link to='/edit-people'><button
        //     onClick={() => handleClick(info.row.original)}>
        //         <i className="fa-solid fa-pencil py-3 px-3 hover:bg-gray-50 text-blue-500"></i></button></Link>
        // })
    ]

    const [data, setData] = useState(USERS)

    const handleClick = (d) => {
        setProfileDetails(d);
        const selectionName = d.name;
        setSearchParams({ select: selectionName });
    }

    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })


    return (
        <>
            <div>
                <ProfileDetails />
                <div className="flex justify-between border-b">
                    <div className="py-5 font-bold my-2">
                        <h2 className="text-xl">Team Members <span className="border rounded p-1 text-sm text-violet-600">{data.length} users</span></h2>
                    </div>
                    <div className="pt-4"><i class="fa-solid fa-magnifying-glass opacity-25 p-1"></i><DebounceSearch className="p-2 border-b rounded outline-none"
                    value={globalFilter ?? ""} 
                    onChange={(value)=>setGlobalFilter(String(value))} placeholder="Search Here"/></div>
                    <div className="pt-4">
                        <Link to='/add-people'><button type="button" className="border rounded p-2 bg-violet-600 font-bold font-inter text-white text-sm hover:bg-violet-800"><i className="fa-solid fa-plus"></i> &nbsp; ADD MEMBER</button></Link>
                    </div>
                </div>

                <table>
                    <thead className="font-inter text-sm my-4">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th className="py-3" key={header.id}>
                                            {
                                                flexRender(header.column.columnDef.header, header.getContext())
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))}
                    </thead>
                    <tbody className="font-inter text-sm text-center">

                        {
                            table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row, i) => (
                                    <tr className={row.id % 2 === 0 ? "bg-gray-50" : null} key={row.id}>
                                        {
                                            row.getVisibleCells().map((cell) => (

                                                <td className="px-4 py-2" key={cell.id}>
                                                    {
                                                        flexRender(cell.column.columnDef.cell, cell.getContext())
                                                    }
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            ) : null
                        }
                    </tbody>
                </table>
                <div className="flex item-center justify-end mt-2 gap-2">

                    <button
                        className="p-1 border border-slate-300"
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => {
                            table.previousPage()
                        }}>
                        {"<"}
                    </button>
                    <button
                        className="p-1 border border-slate-300"
                        disabled={!table.getCanNextPage()}
                        onClick={() => {
                            table.nextPage()
                        }}>
                        {">"}
                    </button>

                    <span className="flex item-center gap-1">
                        <div>Page</div>
                        <strong>
                            {table.getState().pagination.pageIndex + 1} of {" "} {table.getPageCount()}
                        </strong>
                    </span>

                </div>
            </div>
        </>
    )
}

export default Directory;
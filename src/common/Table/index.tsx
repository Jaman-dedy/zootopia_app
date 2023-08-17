import React from 'react';
import { IState } from 'types';

import Tag from '../Tag'

type Props = {
    data: IState
}

const Table = ({ data }: Props) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-6 py-6">
            <table className="w-full text-sm text-left text-slate-950">
                <thead className="text-xs text-gray-700 uppercase bg-zinc-200 text-slate-950">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Designation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Taxonomy
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Character
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Like
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dislike
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data.length > 0 && (
                        data.map((attribute, index) => (

                            <tr className="bg-white border-b bg-slate-50 bg-white hover:bg-slate-200 dark:hover:bg-slate-200">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-slate-950 whitespace-nowrap">
                                    {attribute?.name}
                                </th>
                                <td className="px-6 py-4">
                                    {Object.keys(attribute?.taxonomy).map((key, index) => (
                                        <div key={index}>
                                            {key} : {attribute.taxonomy[key]}
                                        </div>
                                    ))}
                                </td>
                                <td className="px-6 py-4">
                                    <Tag tags={attribute?.locations} />
                                </td>
                                <td className="px-6 py-4">
                                    {Object.keys(attribute?.characteristics
                                    ).map((key, index) => (
                                        <div key={index}>
                                            {key} : {attribute.characteristics
                                            [key]}
                                        </div>
                                    ))}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default Table
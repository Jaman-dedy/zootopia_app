import React from 'react';

import PaonImg from 'assets/images/paon.svg'


const CardRatings = () => {
    return (
         <div className="mr-8">
                <div className="h-[460px] w-[390px] py-5 px-6 shadow-lg rounded-md">
                    <div className="text-lg font-semibold mb-3">High rating</div>
                    <div className="flex mb-6">
                        <img src={PaonImg} alt="" className="h-[70px] w-[70px] mr-2" />
                        <div>
                            <div className="text-md font-semibold">Congoleese Paon</div>
                            <div className="text-sm italic">
                                Um die Herausforderungen in diesen
                                Handlungsfeldern zu erkennen und zu verstehen.
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="flex">
                            <div className="text-4xl font-bold mr-3">4,9</div>
                            <div>

                                <div className="flex items-center mt-1">
                                    <svg className="w-5 h-5 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    Based on 4k ratings
                                </div>
                            </div>

                        </div>

                        <div className="mt-5">
                            <div className="gap-8 sm:grid sm:grid-cols-1">
                                <div>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</dt>
                                        <dd className="flex items-center mb-3">
                                            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "88%"}}></div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Taxonomy</dt>
                                        <dd className="flex items-center mb-3">
                                            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "89%"}}></div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Character</dt>
                                        <dd className="flex items-center mb-3">
                                            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "88%"}}></div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
                                        <dd className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: "54%"}}></div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">5.4</span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
         </div>
    )
}

export default CardRatings
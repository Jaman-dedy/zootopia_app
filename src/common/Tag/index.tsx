import React from 'react';

type Props = {
    tags: Array<string>
}

const Tag = ({ tags }: Props) => {
    return (

        <>
            {
                tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2 mb-2">
                        {tag}
                    </span>
                ))
            }
        </>

    )
}

export default Tag


import React from 'react'
import downPath from '../../arrow-down-sign-to-navigate.png'
import upPath from '../../upload.png'
import nonePath from '../../cancel.png'


// добавить в проект иконки и импортировать
const downIcon = downPath
const upIcon = upPath
const noneIcon = nonePath

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}
 
export const pureChange = (sort: string, down: string, up: string) => {
    return sort === '' ? down : sort === down ? up : ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
               id={id + '-icon-' + sort}
               src={icon}
            />
        </span>
    )
}

export default SuperSort

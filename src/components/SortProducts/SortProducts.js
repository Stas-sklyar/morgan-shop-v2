
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

import s from "./SortProducts.module.scss"

import { changeMethodSort } from "../../actions/actions"
import Select from "react-select";

const SortProducts = () => {

    const [selectedOption, setSelectedOption] = useState("hightToLow");

    const options = [
        { value: 'hightToLow', label: 'Price hight to low' },
        { value: 'lowToHight', label: 'Price low to hight' },
        { value: 'sortNewness', label: 'Newness' },
    ];

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(changeMethodSort(selectedOption.value));
    }, [selectedOption])

    return (
        <div className={s.Sort}>
            <Select className={s["Sort-Select"]} placeholder="Sort by:"
                options={options} defaultValue={selectedOption} onChange={setSelectedOption} />
        </div>
    )
}

export default SortProducts
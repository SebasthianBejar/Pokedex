import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const Pagination = (props) => {
    const {onLeftClick, onRigthClick, page, totalPages} = props;

    return(
        <div className="pagination">
            <button className="btn" onClick={onLeftClick}><SlArrowLeft /></button>
            <div className="pagins">
                {page} de {totalPages}
            </div>
            <button className="btn" onClick={onRigthClick}><SlArrowRight /></button>
        </div>
    )
}

export default Pagination;
import React from 'react'

export const Form = () => {
    return (
        <form>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введіть текст нотатки"
                />
            </div>
        </form>
    )
}
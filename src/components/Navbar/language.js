import React from 'react'

export default class Lang extends React.Components{

    render(){
        return(
            <button
            id="google_translate_element"
                            type='button'
                            className='botin dropdown-toggle'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            EN
                          </button>
        )
    }
}
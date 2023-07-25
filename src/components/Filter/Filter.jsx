import { nanoid } from 'nanoid'
import { Component } from 'react'
import style from './Filter.module.css'

export class Filter extends Component {

    render() {
        return (
            <>
            <label className={style.label}>Find contacts by name <input className={style.input} type="text" /></label>
            </>
        )
      }
}
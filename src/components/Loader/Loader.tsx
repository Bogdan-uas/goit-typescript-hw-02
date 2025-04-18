import { TailSpin } from "react-loader-spinner";
import css from './Loader.module.css'

export default function Loader() {
    return (
        <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#0d6aff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass={css.loader}
        />
)
}

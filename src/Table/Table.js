import FooterTable from "./FooterTable"
import MainTable from "./MainTable"
import NavTable from "./NavTable"
import "./Table.css"

export default function Table () {

    return (
        <div>
            <table id="Table1" border="3">
                <tbody>

                    <NavTable/>
                    <MainTable/>
                    <FooterTable/>

                </tbody>
            </table>
        </div>
    )

}
export const CustomTable = ({ colunms, data }) => {
    return (
        <table className='table-auto w-100'>
            <thead>
                <tr>
                    {colunms?.map((item, index) => {
                        return <th key={index} className='px-4 py-2' >{item.title}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => {
                    return <tr key={index} className='px-4 py-2'>
                        {colunms?.map(cur => {
                            return <td key={cur.key}>
                                {item?.[cur.key]}
                            </td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    )
}

import { CustomTable } from "@components/Table"

export const DemoLayout = () => {
    const columns = [
        {
            title: 'Họ và tên',
            key: 'name'
        },
        {
            title: 'Địa chỉ',
            key: 'address'
        },
        {
            title: 'Số điện thoại',
            key: 'phone'
        },
        {
            title: 'Email',
            key: 'email'
        },
        {
            title: 'Ngày sinh',
            key: 'dob'
        }
    ];
    const data = [
        {
            name: 'Nguyễn Văn A',
            address: '123 Đường ABC, Quận XYZ, TP.HCM',
            phone: '0123456789',
            email: 'nguyenvana@example.com',
            dob: '1990-05-15'
        },
        {
            name: 'Trần Thị B',
            address: '456 Đường DEF, Quận GHI, Hà Nội',
            phone: '0987654321',
            email: 'tranthib@example.com',
            dob: '1985-11-20'
        },
        {
            name: 'Lê Công C',
            address: '789 Đường JKL, Quận MNO, Đà Nẵng',
            phone: '0456789123',
            email: 'lecongc@example.com',
            dob: '1992-03-01'
        },
        {
            name: 'Phạm Thị D',
            address: '321 Đường PQR, Quận STU, Cần Thơ',
            phone: '0741852963',
            email: 'phamthid@example.com',
            dob: '1988-09-10'
        },
        {
            name: 'Hoàng Văn E',
            address: '654 Đường VWX, Quận YZA, Hải Phòng',
            phone: '0369258147',
            email: 'hoangvane@example.com',
            dob: '1995-06-30'
        }
    ];
    return (
        <div className='class-ket-hop'>
            <CustomTable colunms={columns} data={data}></CustomTable>
        </div>
    )
}
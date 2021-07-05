import React from 'react'
import Listing from './Listing'

class StudentList extends React.Component{

    render() {
        const students = [
            {
                id : 1,
                name: 'Syful'
            },
            {
                id : 2,
                name: 'Rasel'
            },
            {
                id : 3,
                name: 'Santa'
            },
        ]
        return (
            <>
                <h1>Student List</h1>

                <Listing students={students}/>
            </>
        )

    }


}

export default StudentList;
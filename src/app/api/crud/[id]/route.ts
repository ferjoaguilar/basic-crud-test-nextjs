import { NextResponse } from 'next/server'
import { connectDB } from '../../config/mongodb'
import Person from '../../schemas/person.schemas'
import { IPerson } from '../../interfaces/person.interfaces'

export async function PUT(request: Request){
    try {
        await connectDB()
        // Get the ID from the URL
        const id = request.url.split('crud/')[1]
        const data:IPerson = await request.json()
        // update the person
        const updatedPerson = await Person.findByIdAndUpdate(id, data)
        return NextResponse.json(updatedPerson, {status: 200})
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 500})
        } else {
            return NextResponse.json({message: 'An unknown error occurred'}, {status: 500})
        }
    }
}

export async function DELETE(request: Request){
    try {
        await connectDB()
        // Get the ID from the URL
        const id = request.url.split('crud/')[1]
        // delete the person
        const deletedPerson = await Person.findByIdAndDelete(id)
        return NextResponse.json(deletedPerson, {status: 200})   
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 500})
        } else {
            return NextResponse.json({message: 'An unknown error occurred'}, {status: 500})
        }
    }
    
}
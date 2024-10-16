import { NextResponse } from 'next/server'
import { connectDB } from '../config/mongodb'
import Person from '../schemas/person.schemas'
import { IPerson } from '../interfaces/person.interfaces'

export async function GET(){
    try {
        await connectDB()
        const person = await Person.find()
        return NextResponse.json(person, {status: 200})
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 500})
        } else {
            return NextResponse.json({message: 'An unknown error occurred'}, {status: 500})
        }
    }
}

export async function POST(request: Request){
    try {
        await connectDB()
        const data:IPerson = await request.json()

        const findUser = await Person.findOne({email: data.email})
        if(findUser){
            return NextResponse.json({message: 'User already exists'}, {status: 400})
        }  

        const newPerson = new Person(data)
        await newPerson.save()

    return NextResponse.json(newPerson, {status: 201})
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 500})
        } else {
            return NextResponse.json({message: 'An unknown error occurred'}, {status: 500})
        }
    }
}
import React,{useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const {id}=useParams();
  const handleDeleteBook=()=>{
    setLoading(true)
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res)=>{
        setLoading(false)
        navigate('/')
      })
      .catch((error)=>{
        setLoading(false)
        alert('Error has been shown in the console check')
        console.log(error);
      });
  };



  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading? <Spinner/>:' '}
      <div className='flex flex-col border-2 border-sky-300 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button onClick={handleDeleteBook} className='p-4 bg-red-600 text-white mt-5 mr-8 w-full'>
          Yes,| Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook
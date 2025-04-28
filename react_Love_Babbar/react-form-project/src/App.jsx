import { useForm } from 'react-hook-form';
import './App.css'

function App() {

  const{
    register,
    handleSubmit, 
    //isSubmitting darshaata hai kya aapka form submitting state mein hai? Kya form submit ho raha hai!
    //Agar submit ho raha hai toh vo true hoga otherwise false hoga!
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    //API call ko simulate karte hai!
    await new Promise((res) => setTimeout(res, 3000));
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input 
          className={errors.firstName ? 'input-error' : ''}
          type="text" 
          {...register('firstName', {required: true, 
          minLength: {value: 3, message: "Min len atleast 3"},
          maxLength: {value: 6, message: "Max len atmost 6"}})} 
        />
        {errors.firstName && <p className='err-msg'>{errors.firstName.message}</p>}
      </div>
      
      <br/>
      
      <div>
        <label>Middle Name: </label>
        <input type="text" {...register('middleName')} />
      </div>

      <br/>
      
      <div>
        <label>Last Name: </label>
        <input type="text" {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last name is not as per the rules"
            }
          })} 
        />
        {errors.lastName && <p className='err-msg'>{errors.lastName.message}</p>}
      </div>

      {/* To manage submit state */}
      <input type="submit" disabled={isSubmitting} 
        value={isSubmitting ? "Submitting" : "Submit"}
      />
    </form>
  )
}

export default App


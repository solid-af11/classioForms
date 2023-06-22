import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Select, TextInput } from '@mantine/core';
// import { countries } from './assets/countries.json';
import {XCircleIcon} from '@heroicons/react/24/solid'

function App() {

  const [formOpen, setFormOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [program, setProgram] = useState("")
  const [course, setCourse] = useState("")

  return (
    <>
      <button onClick={() => setFormOpen(true)} className='bg-indigo-900 px-4 w-max h-10 absolute top-1/3 right-0 text-white -rotate-90'>
        Enquiry Form
      </button>
      {
        formOpen === true &&
        <div className='relative w-screen h-screen bg-black/60 flex justify-center items-center'>
          <div className='shadow-2xl w-max h-max pb-10 px-10 pt-10 bg-amber-300 rounded-lg'>
            <div className='h-10 mb-5 flex justify-end'>
              <XCircleIcon onClick={() => setFormOpen(false)} className='h-8 w-8'/>
            </div>
            <form>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-5'>
                  <TextInput
                    sx={{ flex: '1' }}
                    placeholder='Enter your first name'
                    value={firstName}
                    styles={(theme) => ({
                      wrapper: {
                        width: "100%"
                      },
                      input: {
                        height: '3rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        '::placeholder': {
                          fontWeight: '600'
                        }
                      }
                    })}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextInput
                    sx={{ flex: '1' }}
                    placeholder='Enter your Last name'
                    value={lastName}
                    styles={(theme) => ({
                      input: {
                        width: '100%',
                        height: '3rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        '::placeholder': {
                          fontWeight: '600'
                        }
                      }
                    })}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className='flex'>
                  <TextInput
                    sx={{ flex: '1' }}
                    placeholder='Enter your e-mail address'
                    value={email}
                    styles={(theme) => ({
                      input: {
                        width: '100%',
                        height: '3rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        '::placeholder': {
                          fontWeight: '600'
                        }
                      }
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex'>
                  <TextInput
                    sx={{ flex: '1' }}
                    placeholder='Enter your contact number'
                    value={contactNumber}
                    styles={(theme) => ({
                      input: {
                        width: '100%',
                        height: '3rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        '::placeholder': {
                          fontWeight: '600'
                        }
                      }
                    })}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <div className='flex gap-5'>
                  <Select
                    value={state}
                    placeholder='Select a state'
                    styles={(theme) => ({
                      input: {
                        height: '3rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        '::placeholder': {
                          fontWeight: '600'
                        }
                      },
                    })}
                    data={[
                      { value: 'react', label: 'React' },
                      { value: 'ng', label: 'Angular' },
                      { value: 'svelte', label: 'Svelte' },
                      { value: 'vue', label: 'Vue' },
                    ]}
                    onChange={(e) => setState(e)}
                  />
                  <Select
                    value={city}
                    placeholder='Select a city'
                    styles={(theme) => ({
                      input: {
                        height: '3rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        '::placeholder': {
                          fontWeight: '600'
                        }
                      },
                    })}
                    onChange={(e) => setCity(e)}
                    data={[
                      { value: 'react', label: 'React' },
                      { value: 'ng', label: 'Angular' },
                      { value: 'svelte', label: 'Svelte' },
                      { value: 'vue', label: 'Vue' },
                    ]}
                  />
                </div>
                <div className='flex flex-col'>
                  <Select
                    value={program}
                    placeholder='Select a program'
                    styles={(theme) => ({
                      input: {
                        height: '3rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        '::placeholder': {
                          fontWeight: '600'
                        }
                      },
                    })}
                    onChange={(e) => setProgram(e)}
                    data={[
                      { value: 'react', label: 'React' },
                      { value: 'ng', label: 'Angular' },
                      { value: 'svelte', label: 'Svelte' },
                      { value: 'vue', label: 'Vue' },
                    ]}
                  />
                </div>
                <div className='flex flex-col'>
                  <Select
                    value={course}
                    placeholder='Select Course'
                    styles={(theme) => ({
                      input: {
                        height: '3rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        '::placeholder': {
                          fontWeight: '600'
                        }
                      },
                    })}
                    onChange={(e) => setCourse(e)}
                    data={[
                      { value: 'react', label: 'React' },
                      { value: 'ng', label: 'Angular' },
                      { value: 'svelte', label: 'Svelte' },
                      { value: 'vue', label: 'Vue' },
                    ]}
                  />
                </div>
                <button className='bg-black h-12 text-white rounded-lg' type='submit'>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default App

import React from 'react'

export const old-registration-form = () => {
  return (
    <div>	 
        <form className="space-y-4 m-4" onSubmit={(event) => onRegister(event)}>
				<input required type="text" placeholder="First Name" className="h-10 border border-black rounded block px-4" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
				<input required type="text" placeholder="Last Name" className="h-10 border border-black rounded block px-4" value={lastName} onChange={(event) => setLastName(event.target.value)} />
				<input required type="email" className="h-10 border border-black rounded block px-4" placeholder="Email address" value={email} onChange={(event) => setEmail(event.target.value)} />
				<input required type="password" className="h-10 border border-black rounded block px-4" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
				<button className="h-10 bg-blue-400 px-6 text-white h-10 flex items-center justify-center rounded" type="submit">
					{loading ? "Loading..." : "Sign up"}
				</button>
			</form>
     </div>

  )
}

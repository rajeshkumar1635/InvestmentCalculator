
export default function UserInput({onChange,UserInput}){
   
    
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required
                value={UserInput.initialInvestment}
                 onChange={(event)=>onChange('initialInvestment',event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" 
                value={UserInput.annualInvestment}
                onChange={(event)=>onChange('annualInvestment',event.target.value)}
                required/>
            </p>
        </div>
            <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" 
                value={UserInput.expectedReturn}
                onChange={(event)=>onChange('expectedReturn',event.target.value)}required/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number"
                value={UserInput.duration}
                onChange={(event)=>onChange('duration',event.target.value)}
                required/>
            </p>
        </div>

    </section>
}
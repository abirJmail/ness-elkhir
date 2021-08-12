import React from 'react'

const BloodSearch = ({setmySearcht}) => {
    return (
        <div> 
            <h3>Or by Bloodgroup</h3>
            <div className="input-group">
<input 
type="radio" 
id="O+" 
name="bloodgroup" 
value="O+"
onChange={(event) => setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="O+">O+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input 
type="radio" 
id="O-" 
name="bloodgroup" 
value="O-"
onChange={(event) => setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="O-">O-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input 
type="radio" 
id="A+" 
name="bloodgroup" 
value="A+"
onChange={(event) =>setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="A+">A+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input 
type="radio" 
id="A-" 
name="bloodgroup" 
value="A-"
onChange={(event) => setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="A-">A-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input 
type="radio" 
id="B+" 
name="bloodgroup" 
value="B+"
onChange={(event) => setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="B+">B+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input 
type="radio" 
id="B-" 
name="bloodgroup" 
value="B-"
onChange={(event) => setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="B-">B-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input 
type="radio" 
id="AB+" 
name="bloodgroup" 
value="AB+"
onChange={(event) =>setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="AB+">AB+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input 
type="radio" 
id="AB-" 
name="bloodgroup" 
value="AB-"
onChange={(event) => setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="AB-">AB-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input 
type="radio" 
id="no" 
name="bloodgroup" 
value="Don't Know"
onChange={(event) => setmySearcht(event.target.value)}
/>&nbsp;
<span className="radiolabels"  for="no">Don't Know</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
        </div>
    )
}

export default BloodSearch

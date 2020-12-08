import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm= ({onInputChange,onButtonSubmit})=>{
	return(

		<div>
			<p className ='  center'>
			{'This brains good at detecting faces in pictures. Give it a try'}</p>
			
				<div className= 'center'>
					<div className ='form  center pa2 br2 shadow-2'>
					<input className = ' pa2 w-70 center'type ='text' onChange= {onInputChange} />

					<button className= '  f3 grow link center w-30 ph2 white bg-light-purple'
										   onClick = {onButtonSubmit}> Detect</button>

					</div>

				</div>
		</div>



		)




}

export default ImageLinkForm;



import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { QRCode } from 'react-qr-svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://upload.wikimedia.org/wikipedia/commons/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Booking = () => {
    const [firstName,setFirstName]=useState()
    const [lastName,setLastName]=useState()
    const [id,setId]=useState()
    const [idNumber,setIdNumber]=useState()
    const [visitor,setVisitor]=useState([])
    const [newVis, setNewVis]=useState('')
    const [qrGenerate,setqrGenerated]=useState(null)
    const handleVisitorAdd=(e)=>{
        e.preventDefault()
        setVisitor([...visitor,newVis])
        setNewVis('')
    }

    const handleChange=(e)=>{
        e.preventDefault();
        
            setNewVis(e.target.value)
    }
    const handleGenerateQR = (e)=>{
        e.preventDefault()
        const data = {firstName:firstName,lastName:lastName,id:id,idNumber:idNumber,visitor:visitor}
        console.log(data)
        setqrGenerated(data)

    }
    console.log('rerender')
  return (
    <Container>
      <Wrapper>
        {!qrGenerate && <>
        <Title>Book Ticket</Title>
        <Form>
          <Input placeholder="first name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
          <Input placeholder="last name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
          <Input placeholder="id" value={id} onChange={(e)=>setId(e.target.value)} />
          <Input placeholder="idNumber " value={idNumber} onChange={(e)=>setIdNumber(e.target.value)} />

          <div className="w-full gap-4 p-3 rounded grid grid-cols-1 md:grid-cols-2">
          {visitor?.map(vis=>{
              return (
                  <p className="col-span-1 p-2  border border-2 bd-red-300 hover:bg-red-500">{vis}</p>
              )
          })}
          </div>
          <Input placeholder="Visitor" value={newVis} onChange={handleChange}/>
          <Button onClick={handleVisitorAdd}>Add</Button>
          <Button onClick={handleGenerateQR}>Book</Button>
        </Form>
        </>}
        {qrGenerate && 
         <div>
             <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify({
              qrGenerate
            })}/>
         </div>
        }
      </Wrapper>
    </Container>
  );
};

export default Booking;
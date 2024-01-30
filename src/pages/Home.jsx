
import Container from 'react-bootstrap/Container';
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoEarthSharp } from "react-icons/io5";
import { BsHandThumbsUp } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import recatjs from '../images/reactjs.jpg'
import post1 from '../images/post.png'
import { FaCalendarAlt } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import profile from '../images/profile.jpeg'
import { ImBookmark } from "react-icons/im";
import { HiMiniPhoto } from "react-icons/hi2";
import  Button  from 'react-bootstrap/Button';
export const Home = () => {
  return (
    <Container fluid="md">
    <Row>
      <Col>
      <Card className='mt-4 border shadow rounded-top '>
        <img src={recatjs} alt='cover' height={90}   className='border-full rounded-top'
        />
        <div className='items-center justify-center  mt-n5  '>
        <Image src={profile} alt='cover' height={60}   width={60} 
        roundedCircle 
        className='border-full rounded-full justify-center items-center m-auto '
        />
        </div>
        <div className='flex mt-4 text-center'>
            <h2 className='mt-3'>Mubashara</h2>
            <p className='p-2 '>Web Development | HTML | CSS | JavaScript | Bootstrap5 | ReactJS | ReactBootstrap | Node.js | MongoDB | Tailwind CSS|NextJs | Git | GitHub| Figma | Wordpress</p>
            <hr/>
        </div>
        <div className=' p-1  '>
        <Row className=''>
            <Col sm={9}>
            <p className=''>Profile View</p>
            </Col>
            <Col>
            <p className=''>110</p>
            </Col>
        </Row>
        <Row className=''>
            <Col sm={9} >
            <p className=''>Post Impressions</p>
            </Col>
            <Col >
            <p className=''>310</p>
            </Col>
        </Row>
        <hr/>
        <p>Boost your career with Premium</p>
        <p className=''>Try for PKR0</p>
        <hr/>
        <p><ImBookmark /><span className='mx-2'>My items</span></p>
        </div>
        <div>

        </div>
        
      </Card>
      
      </Col>
      <Col xs={6} className='mt-4' >
      <Card >
      <Row className='d-flex'>
        <Col sm={2} className='m-2 items-center d-flex '>
        <Image src={profile} alt='cover' height={60}   width={60} 
        roundedCircle 
        className='border-full rounded-full justify-center items-center'
        />
       
        </Col>
        <Col sm={9} className='m-2 mt-3 items-center'>
        <Form.Control className='p-2 ml-2 w-full border-full rounded-5' placeholder='Start a post'>
      </Form.Control>
        </Col>
        </Row>
        <Row className='p-2 items-center '>
            <Col className='d-flex'><HiMiniPhoto size={22} className="text-primary"/><span className='mx-2'>Media</span></Col>
            <Col> <FaCalendarAlt size={22} className='text-warning'/><span className='mx-2'>Event</span></Col>
            <Col>
            <GrArticle size={22} className='text-brown'/><span className='mx-2'>White article</span></Col>
        </Row>
      </Card>
      <hr />
      <Card>
      <Row className='p-3 items-start'>
      <Col sm={2}>
      <Image src={profile} alt='cover' height={50}   width={50} 
        roundedCircle 
        className='border-full rounded-full justify-center items-center m-auto '
        />
        </Col>
        <Col>
        <h8 className="mx-2 fw-bold">Mubashara .<span className=''>2nd</span></h8> <br />
        <h8 className='fst-normal'>1222 followers</h8> <br />
        <h8>2h .<IoEarthSharp /></h8>
        </Col>
      </Row>
        <div className='items-center justify-center center mx-auto'>
         <Image  src={post1} alt='post' height={300} width={540}className='w-full' fluid/>
        </div>
        <hr />
        <Row className='p-3'>
            <Col><BsHandThumbsUp /> Like</Col>
            <Col><TfiCommentAlt /> Comment</Col>
            <Col> <PiArrowsClockwiseFill /> Report</Col>
            <Col><BsFillSendFill /> Send</Col>
        </Row>
      </Card>
      </Col>
      <Col>
      <Card className='mt-4'>
        <div>
        <h6 className='p-2'>Add to your feed</h6>
            <Row className='p-3'>
            <Col sm={3}>
          <Image src={profile} alt='cover' height={50}   width={50} 
        roundedCircle 
        className='border-full rounded-full justify-center items-center m-auto '
        />
        </Col>
                <Col>
                  <h8 className="fw-bold">Mr.HR</h8>
                  <p>Web Development | HTML | CSS | JavaScript | Bootstrap5 | ReactJS  </p>
                  <Button className='rounded-5 ' style={{backgroundColor:'transparent',color:'black',borderColor:'black'}}> + Follow </Button>
                </Col>
            </Row>
            <Row className='p-3'>
            <Col sm={3}>
          <Image src={profile} alt='cover' height={50}   width={50} 
        roundedCircle 
        className='border-full rounded-full justify-center items-center m-auto '
        />
        </Col>
                <Col>
                  <h8 className="fw-bold">Mr.HR</h8>
                  <p>Web Development | HTML | CSS | JavaScript | Bootstrap5 | ReactJS  </p>
                  <Button className='rounded-5 ' style={{backgroundColor:'transparent',color:'black',borderColor:'black'}}> + Follow </Button>
                </Col>
            </Row>
        </div>
      </Card>
      
      </Col>
    </Row>

  </Container>
  )
}

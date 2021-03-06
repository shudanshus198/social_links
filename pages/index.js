import Link from "next/link";
import { signIn , signOut, useSession} from "next-auth/react"
import { Button, Card } from "react-bootstrap";

const Home = () => {

    const {data: session , status } = useSession();
    //const [user, setUser] = useState({});
    const user = {}
    
    if (status === "authenticated") {
        console.log(session.user.email)
        //setUser(session.user)
        user = session.user
    }

    console.log(user);


    return ( 
        <div className="container">
            <div className="google-login-btn-container mt-5">
                {
                    status === "unauthenticated" ? (
                        <div className="google-sign-in-btn text-center">
                            <Link href='/api/auth/signin'>
                                <Button
                                    onClick={e => {
                                        e.preventDefault()
                                        signIn("google")
                                    }}
                                >
                                    Sign In with Google
                                </Button>
                            </Link>
                       </div>
                    ) : (
                        <div className="google-signout-btn-container text-center">
                            <Link href='/api/auth/signout'>
                                <Button
                                    onClick={e => {
                                        e.preventDefault()
                                        signOut("google")
                                    }}
                                >
                                    Sign out with Google    
                                </Button>
                            </Link>
                        </div>
                    )
                }
                 
            </div>
            <div className="col d-flex justify-content-center mt-5">
                {
                   user ? (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src= {user.image} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ) : {}
                }
            </div>
        </div>
     );
}
 
export default Home;

    
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useAuth } from '../../contexts/auth';
import { useForm } from 'react-hook-form';

export function LoginPage() {
const { signIn } =  useAuth();
const navigate = useNavigate();
const { register, handleSubmit, formState } = useForm();

const { errors, isSubmitting } = formState

async function onSubmit(data) {
    // event.preventDefault()
    console.log(data);
    try {
        await signIn(data)
        navigate('/dashboard')
    } catch (error) {
        alert(error)
    }
}

    return (
        <main className={styles.container}>
            <div className={styles.formSignin}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <img 
                        className="mb-4" 
                        src="https://lab365-admin.hml.sesisenai.org.br/javax.faces.resource/img/logo-lab.png" 
                        alt="lab 365"  
                        height="57" 
                    />
                    <h1 className="h3 mb-3 fw-normal">Efetuar login</h1>

                    <div className="form-floating">
                        <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com"
                        {...register("email", { 
                            required: {
                                value: true,
                                message: "This field is mandatory" 
                        },  // Example only
                            // maxLength: {
                            //     value: 6, 
                            //     message: "Max of 6 characters"   
                            // }
                        })} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {errors.email && <span className='text-danger text-sm'>{errors.email.message}</span>}
                    <div className="form-floating">
                        <input 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Password"
                        {...register("password")} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Carrengado...': 'Entrar'}</button>
                    <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                    <p>
                        Não possui cadastro? <Link to="/cadastro">Cadastra-se</Link> 
                    </p>
                </form>
            </div>

        </main>
    )
}
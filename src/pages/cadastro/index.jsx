import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form';

export function CadastroPage() {
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            idade: 0
        }
    });

    const { errors } = formState;

    async function onSubmit(data) {
        console.log(data);
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
                    <h1 className="h3 mb-3 fw-normal">Preencha todos os campos para efetuar o cadastro.</h1>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Nome" 
                        {...register("nome", { required: 'Nome é obrigatório' })}
                        aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.nome && <span className='text-danger text-xs'>{errors.nome.message}</span>}
                    </div>

                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="email@example.com" 
                        {...register("email", { required: 'E-mail é obrigatório' })}
                        aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <span className='text-danger text-xs'>{errors.email.message}</span>}
                    </div>

                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Idade</label>
                        <input 
                        type="number" 
                        className={`form-control ${errors.idade && 'is-invalid'}`}
                        id="exampleFormControlInput1" 
                        aria-invalid={!!errors.idade}
                        placeholder="Idade"
                        {...register('idade', {
                            min: {
                                value: 18,
                                message: 'Apenas maiores de 18 anos.'
                            }
                        })} />
                        {errors.idade && <span className='text-danger text-xs'>{errors.idade.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Senha</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Senha" 
                        {...register("senha", { required: 'Senha é obrigatória' })}
                        aria-invalid={errors.senha ? "true" : "false"}
                        />
                        {errors.senha && <span className='text-danger text-xs'>{errors.senha.message}</span>}
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                    <p>Já possui cadastro ? <Link to={-1}>Efetuar login</Link></p>
                </form>
            </div>

        </main>
    )
}
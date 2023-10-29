import NavbarRoot from "../../componentes/Navbar/NavbarRoot"

function DadosUsuario(){
    return(
        <div>
            <NavbarRoot.Content>
                <NavbarRoot.Menu>
                    <NavbarRoot.Item></NavbarRoot.Item>
                </NavbarRoot.Menu>
            </NavbarRoot.Content>
            <main className="flex flex-col items-center gap-y-10 mx-auto" style={{backgroundColor:"#EAEAEA" }}>
                <div className="flex flex-col items-center gap-y-2 mt-4">
                    <h2 className="text-2xl">Dados do usuário</h2>
                    <div className="h-8 w-8 bg-orange-principal rounded-full"></div>
                </div>
                <div className="flex flex-col p-8 bg-white-principal w-max gap-y-4 rounded-lg drop-shadow-lg">
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="">Nome Completo</label>
                        <input className="w-5/5 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal" type="text" value="Carlos Marques" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="">Email</label>
                        <input className="w-5/5 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal" type="email" />
                    </div>
                    <div className="flex flex-row gap-x-8">
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="">CPF</label>
                            <input type="text" className="w-80 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="">Gênero</label>
                            <select name="" id="" className="w-36 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal">
                                <option value="">Maculino</option>
                                <option value="">Feminino</option>
                                <option value="">Outro</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="">Data de Nascimento</label>
                            <input type="date" className="px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="">Telefone</label>
                            <input type="text" className="px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-10">
                    <button className="font-medium px-14 py-2 bg-orange_opacity-principal rounded-lg">Cancelar</button>
                    <button className="font-medium px-14 py-2 bg-orange-principal rounded-lg">Salvar</button>
                </div>
            </main>
        </div>
    )
}
export default DadosUsuario;
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export const PanelResizable = () => {
    return (
        <div>
          <code className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mb-">
                Ejemplo de un componente de Shadcn (se mueven los margenes interiores)
            </code>
            <ResizablePanelGroup
                direction="horizontal"
                className="max-w-md min-h-[400px] rounded-lg border border-black md:min-w-[450px] mt-6"
            >
                <ResizablePanel defaultSize={50}>
                    <div className="flex flex-col h-[400px] items-start justify-start p-6 border border-black space-y-2">
                        <span className="font-semibold">Que se busca?</span>
                        <p>Se busca ampliar la startup cada vez más, como se viene haciendo los ultimos años. Se busca curiosidad, creatividad y la capacidad de aprender. <a href="Propuesta"><strong>Click para ver más</strong></a></p>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={45}>
                            <div className="flex flex-col h-full items-start justify-start p-6 border border-black">
                                <span className="font-semibold">A la hora del desarrollo</span><br />
                                <p>Se valora la rapidez, eficacia y la capacidad de aprender. Se busca que cada miembro pueda hacer su aporte. 
                                </p>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={55}>
                            <div className="flex flex-col h-full items-start justify-start p-6 border border-black">
                                <span className="font-semibold">Con el cliente</span> <br />
                                <p>Hay que transmitir seguridad, profesionalismo, confianza y transparencia, todo esto tanto en la landing, como en el MVP</p>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>    
        </div>    
    )
}
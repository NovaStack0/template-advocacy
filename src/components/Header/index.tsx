import Image from "next/image";

export function Header() {
  return (
    <div className="w-screen h-24 flex items-center justify-center">
      <div className="w-full max-w-screen-xl flex items-center justify-between">
        <Image src="/logo.svg" alt="logo" width={260} height={46} />
        <ul className="flex items-center justify-between w-1/2">
          <li>Nosso escritório</li>
          <li>Área de Atuação</li>
          <li>Diferenciais</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  );
}
import SiDocker from '@icons-pack/react-simple-icons/icons/SiDocker'
import SiFlask from '@icons-pack/react-simple-icons/icons/SiFlask'
import SiGithub from '@icons-pack/react-simple-icons/icons/SiGithub'
import SiGnubash from '@icons-pack/react-simple-icons/icons/SiGnubash'
import SiGoogle from '@icons-pack/react-simple-icons/icons/SiGoogle'
import SiJavascript from '@icons-pack/react-simple-icons/icons/SiJavascript'
import SiJetbrains from '@icons-pack/react-simple-icons/icons/SiJetbrains'
import SiJunit5 from '@icons-pack/react-simple-icons/icons/SiJunit5'
import SiKnime from '@icons-pack/react-simple-icons/icons/SiKnime'
import SiMongodb from '@icons-pack/react-simple-icons/icons/SiMongodb'
import SiMysql from '@icons-pack/react-simple-icons/icons/SiMysql'
import SiNeo4j from '@icons-pack/react-simple-icons/icons/SiNeo4j'
import SiNextdotjs from '@icons-pack/react-simple-icons/icons/SiNextdotjs'
import SiPhp from '@icons-pack/react-simple-icons/icons/SiPhp'
import SiPython from '@icons-pack/react-simple-icons/icons/SiPython'
import SiReact from '@icons-pack/react-simple-icons/icons/SiReact'
import SiUbuntu from '@icons-pack/react-simple-icons/icons/SiUbuntu'
import SiUml from '@icons-pack/react-simple-icons/icons/SiUml'
import SiVirtualbox from '@icons-pack/react-simple-icons/icons/SiVirtualbox'
import cLogo from '../assets/logos/c.svg'
import javaLogo from '../assets/logos/java.svg'
import microsoft365Logo from '../assets/logos/microsoft365.svg'
import officeLogo from '../assets/logos/office.svg'
import vsCodeLogo from '../assets/logos/vscode.svg'
import windowsLogo from '../assets/logos/windows.svg'

type TechLogoProps = {
  name: string
}

const officialIcons = {
  Python: SiPython,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  Shell: SiGnubash,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Flask: SiFlask,
  JUnit: SiJunit5,
  'KNIME Analytics Platform': SiKnime,
  GitHub: SiGithub,
  Docker: SiDocker,
  JetBrains: SiJetbrains,
  'Linux · Ubuntu': SiUbuntu,
  VirtualBox: SiVirtualbox,
  UML: SiUml,
  'Google Workspace': SiGoogle,
  SQL: SiMysql,
}

const fallbackMarks: Record<string, string> = {
  JSX: '</>',
  'Design patterns': '◇',
  'Architecture MVC': 'MVC',
}

export function TechLogo({ name }: TechLogoProps) {
  if (name === 'C') {
    return <img alt="" aria-hidden="true" className="size-8 object-contain" src={cLogo} />
  }

  if (name === 'Java') {
    return <img alt="" aria-hidden="true" className="size-8 object-contain" src={javaLogo} />
  }

  if (name === 'Windows') {
    return <img alt="" aria-hidden="true" className="size-8 object-contain" src={windowsLogo} />
  }

  if (name === 'VS Code') {
    return <img alt="" aria-hidden="true" className="size-8 object-contain" src={vsCodeLogo} />
  }

  if (name === 'Pack Office') {
    return <img alt="" aria-hidden="true" className="h-7 w-12 object-contain" src={officeLogo} />
  }

  if (name === 'Microsoft 365') {
    return <img alt="" aria-hidden="true" className="size-8 object-contain" src={microsoft365Logo} />
  }

  if (name === 'NoSQL') {
    return (
      <span aria-hidden="true" className="flex h-10 w-12 shrink-0 -translate-x-1.5 items-center justify-center gap-1">
        <SiMongodb className="size-[22px]" color="default" size={22} />
        <SiNeo4j className="size-[22px]" color="default" size={22} />
      </span>
    )
  }

  const Icon = officialIcons[name as keyof typeof officialIcons]

  if (Icon) {
    return <Icon aria-hidden="true" className="size-8" color="default" size={32} />
  }

  return (
    <span aria-hidden="true" className={`grid size-8 place-items-center font-mono font-bold text-slate-300 ${name === 'JSX' ? 'text-[14px]' : 'text-[18px]'}`}>
      {fallbackMarks[name] ?? name.slice(0, 2).toUpperCase()}
    </span>
  )
}

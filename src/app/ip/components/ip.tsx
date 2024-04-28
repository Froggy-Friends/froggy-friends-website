import Assignment from "./assignment";
import Compensation from "./compensation";
import Cooperation from "./cooperation";
import Definitions from "./definitions";
import Governing from "./governing";
import License from "./license";
import Moral from "./moral";
import Ownership from "./ownership";
import Projects from "./projects";
import Purpose from "./purpose";
import Termination from "./termination";
import Trademark from "./trademark";
import Warranties from "./warranties";


export default function IP() {
  return (
    <div className='flex flex-col items-center justify-center w-full md:max-w-[720px] max-w-[320px] h-full mx-auto flex-1 px-4 text-black pt-48 pb-32'>
      <p className='sm:text-7xl lg:text-8xl text-4xl uppercase'>IP Rights</p>
      <p>Last Updated: April 28, 2024</p>
      <p className='text-2xl self-start pt-8'>Background</p>
      <p className='font-vista-sans'>
        The subject of Intellectual Property (IP) rights has been an interesting
        and evolving topic in the Non-fungible Token (NFT) space. Froggy Friends
        has reviewed numerous currently utilized intellectual property documents
        and standards in the respective copyright and intellectual fields and will give
        credit to and cite industry leaders where applicable. Pudgy Penguins and
        World of Women (WOW) are by far the current industry leader in IP
        rights. Pudgy Penguins governing law body currently is documented under
        the State of Delaware, while WOW is governed in accordance with the laws
        of France. Froggy Friends IP is currently primarily governed under the State
        of California law. For the foreseeable future, we will try to adhere to the
        gold standard set forth by Pudgy Penguins and WOW on IP right. This is
        important so that Froggy Friends can evolve with the rapidly changing new
        technology as legal precedence and definitions potentially change current
        understanding of intellectual property rights in accordance with U.S. law.
        At the core, even though NFT technology is relatively new, the IP laws
        governing this new field are not. Basic definitions, along with cited
        materials and legal documents will be given below to help the reader
        understand certain common legal terms.
      </p>
      <Definitions />
      <Purpose />
      <Projects />
      <License />
      <Warranties />
      <Termination />
      <Ownership />
      <Assignment />
      <Compensation />
      <Moral />
      <Trademark />
      <Cooperation />
      <Governing />
    </div>
  )
}
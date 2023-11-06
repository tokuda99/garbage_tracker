import { useIsSidebarOpenMutator } from '@/recoil/isSidebarOpen/isSidebarOpen';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


export const Header = () => {
  const { toggleIsSidebarOpen } = useIsSidebarOpenMutator();
  return (
    <header className={'h-88 flex justify-between items-center p-20'}>
      <button
        className={'cursor-pointer'}
        onClick={() => toggleIsSidebarOpen()}
      >
        <RxHamburgerMenu size={24} className={'text-white'}/>
      </button>
      <div className={'flex items-center'}>
        <p className={'ml-10 text-18 text-white'}>Garbage Tracker</p>
      </div>
      <p className={'text-white'}></p>
    </header>
  );
};
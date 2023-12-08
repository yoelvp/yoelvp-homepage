import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiSolidCategory } from 'react-icons/bi/index.js'

export default function CategoryMenu() {
  return (
    <Menu
      as='div'
      className="relative inline-block text-left"
      aria-label='menu'
    >
      <Menu.Button className="inline-flex justify-center items-center gap-2 rounded-md border border-zinc-400 dark:border-zinc-400 p-2 text-sm font-bold shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-100 transition-all duration-300">
        Categorias
        <BiSolidCategory />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
          <Menu.Item>
            {({ active }) => (
              <a
                href='/categories/all'
                className={`
                  ${active && 'bg-orange-200 dark:bg-zinc-700'}
                  block px-4 py-2 text-sm
                `}
              >
                Todos
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href='/categories/personal'
                className={`
                  ${active && 'bg-orange-200 dark:bg-zinc-700'}
                  block px-4 py-2 text-sm
                `}
              >
                Personal
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href='/categories/collaborations'
                className={`
                  ${active && 'bg-orange-200 dark:bg-zinc-700'}
                  block px-4 py-2 text-sm
                `}
              >
                Colaboraciones
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

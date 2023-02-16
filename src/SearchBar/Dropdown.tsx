import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function BrowseModal({showBrowse, toggleBrowse}:{showBrowse:boolean, toggleBrowse:Function}) {

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={showBrowse} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => toggleBrowse(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                  <div className="text-left">




                    {/* <button className="btn btn-secondary" onClick={()=>toggleBrowse(close)}>Close</button> */}
                    
                    
                    
                    <p>oclip logo should open up home page (default: reccomended feed page)</p>
                    <p>as well as sidebar with top options: a. for you, b. most recent, c. trending</p>
                    <p>rest of sidebar is list of communities you've joined (with pinned ones at top of list)</p>
                    <p>if a community is selected it replaces the "oclip" word in the AppNav with the community name and stays at the top next to the oclip logo</p>

                    <p>My Libary opens up the user's library/saved stuff/programs</p>





                  </div>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
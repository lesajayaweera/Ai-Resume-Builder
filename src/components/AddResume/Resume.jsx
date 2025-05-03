import React from 'react'

import '../../output.css'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
function Resume() {
  return (
    <div>
        <div className='p-10 py-14 border items-center flex justify-center bg-slate-200 rounded lg h-[280px] hover:scale-105 transition-all duration-300'>
            
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}

export default Resume;
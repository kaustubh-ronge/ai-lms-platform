'use client'

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Loader2Icon, Sparkle } from 'lucide-react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const AddNewCourseDialog = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        includeVideo: false,
        noOfChapters: 1,
        category: '',
        level: ''
    });

    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const onGenerate = async () => {
        const courseId = uuidv4();
        try {
            setLoading(true);
            const result = await axios.post('/api/generate-course-layout', {
                ...formData,
                courseId: courseId
            });
            // if (result.data.resp == 'Limit Exceeded') {
            //     toast.warning('Please Subscribe to Plan!');
            //     router.push('/workspace/billing');
            // }
            setLoading(false);
            toast.success("Course Generated Successfully !!")
            router.push('/workspace/edit-course/' + result.data?.courseId);
        }
        catch (e) {
            setLoading(false);
            toast.error("Server Side Error. Please Refresh the page and try again !")
            console.log(e)
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Course using AI</DialogTitle>
                        <DialogDescription asChild>
                            <div className='flex flex-col gap-3 mt-3'>
                                <div>
                                    <label>Course Name</label>
                                    <Input onChange={(event) => onHandleInputChange('name', event?.target.value)} placeholder='Course Name' />
                                </div>

                                <div>
                                    <label>Course Description (Optional)</label>
                                    <Textarea onChange={(event) => onHandleInputChange('description', event?.target.value)} placeholder='Course Description' />
                                </div>

                                <div>
                                    <label>No. Of Chapters</label>
                                    <Input onChange={(event) => onHandleInputChange('noOfChapters', event?.target.value)} type='number' placeholder='No. Of Chapters' />
                                </div>

                                <div className='flex gap-3 items-center mt-2'>
                                    <label>Include Video</label>
                                    <Switch
                                        onCheckedChange={() => onHandleInputChange('includeVideo', !formData?.includeVideo)}
                                    />
                                </div>

                                <div>
                                    <label>Difficulty Level</label>
                                    <Select onValueChange={(value) => onHandleInputChange('level', value)}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Difficulty Level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="beginner">Beginner</SelectItem>
                                            <SelectItem value="moderate">Moderate</SelectItem>
                                            <SelectItem value="advanced">Advanced</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label>Category</label>
                                    <Input onChange={(event) => onHandleInputChange('category', event?.target.value)} placeholder='Category seperated by commas' />
                                </div>

                                <div className='mt-5'>
                                    <Button
                                        disabled={loading}
                                        onClick={onGenerate}
                                        className={'bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 w-full'}>
                                        {loading ? <Loader2Icon className='animate-spin' /> :
                                            <Sparkle />}
                                        Generate Course</Button>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewCourseDialog

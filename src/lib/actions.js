'use server'
export const CreateATask = async (formData) => {
    'use server'
    const name = formData.get('name');
    
    console.log('Add a task with a name : ', formData);
}
import s from './Dialogs.module.css'
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems} >
               <div className={s.dialog + ' ' + s.active}>
                   Tolik
               </div>
               <div className={s.dialog}>
                   Valera
               </div>
               <div className={s.dialog}>
                   Slavik
               </div>
               <div className={s.dialog}>
                   Galya
               </div>
               <div className={s.dialog}>
                   Tamara
               </div>
           </div>
           <div className={s.messages}>
               <div className={s.message}>
                    I love to spy on women 
               </div>
               <div className={s.message}>
                    O my gosh
               </div>
               <div className={s.message}>
                    I think this is nonsence
               </div>
               <div className={s.message}>
                    I was very drank tommorow
               </div>
               <div className={s.message}>
                    Hello, i am Tamara
               </div>
           </div>
        </div>
    )
}
export default Dialogs;
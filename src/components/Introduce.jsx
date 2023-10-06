import React, {useState} from 'react'
import { BiChevronLeft } from 'react-icons/bi';

function Introduce() {
    const [limiter, setLimiter] = useState(70);

    const paragraph = 'سامسونگ در زمینه گوشی‌های هوشمند میان‌رده تا به امروز توانسته است با معرفی محصولاتی با مشخصات فنی مناسب و قیمتی مقرون به‌صرفه، عملکرد بسیار خوبی را به نمایش بگذارد. سامسونگ Galaxy A34 5G هم یکی از این گوشی‌های هوشمند دوست داشتنی این شرکت است. صفحه‌نمایش جذاب و قدرتمند 6.6 اینچی این گوشی با رزولوشن بسیار خوب و نرخ بروزرسانی فوق‌العاده 120 هرتز، چیزی کم از یک پرچمدار ندارد و سامسونگ دوباره ثابت کرد که در زمینه صفحه‌نمایش هنوز هم حرف‌های بسیاری برای گفتن دارد. در بخش سنسور‌های دوربین هم سنسور دوربین عریض 48 مگاپیکسل این گوشی توانایی ثبت تصاویر بسیار جذاب و باکیفیتی را در نور روز و نور شب دارد. سنسور دوربین فوق‌عریض 8 مگاپیکسل این گوشی هم با زاویه دید 123 درجه، امکان ثبت تصاویر جذابی را در طبیعت و فضای باز دارد. سنسور دوربین 5 مگاپیکسل ماکرو هم برای ثبت تصاویر از فاصله نزدیک این گوشی را همراهی می‌کند. دوربین سلفی 13 مگاپیکسل این گوشی هم سوای عمکلرد بسیار خوب در نور روز، توانایی فیلمبرداری با نهایت کیفیت 4K را دارد. پردازنده دیمنسیتی 1080 شرکت مدیاتک هم این گوشی را همراهی می‌کند که سوای عملکرد بسیار خوب در اجرای بازی‌ها حتی سنگین، سبب شده تا این گوشی همانطور که از نامش پیداست، توانایی پشتیبانی از شبکه‌های اینترنتی نسل پنجم یا همان 5G را داشته باشد. باتری با میزان ظرفیت 5000 میلی‌آمپرساعت هم به ازای هر بار شارژ صد درصدی در حالت استفاده معمولی، طول عمر مفید (زمان آماده به‌کار) دو روز را ارائه می‌کند. در مجموع باید بگوییم که اگر به دنبال خرید گوشی میان‌رده‌ای هستید که از صفحه‌نمایشی در حد و اندازه یک گوشی پرچمدار، سنسورهای دوربین متنوع و قدرتمند و پردازنده مناسب برای اجرای بازی‌های سنگین بهره برده باشد، این گوشی می‌تواند یکی از بهترین انتخاب‌های ممکن باشد.'

    const countWords = (p) => {
        const wordsArray = p.split(' ');
        return wordsArray.length;
    };

    const fullParagraph = countWords(paragraph);

    const limitWords = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
        }
        return text;
      };

      const clickHandler = ()=> {
        setLimiter(oldLimiter => {
            if(oldLimiter === 70){
                return fullParagraph;
            } else {
                return 70;
            }
        });
      }

    const limitedWords = limitWords(paragraph, limiter);

    const heightLimiter = limiter === 70 ? '.introduce-paragraph' : '';
    const limiterButton = limiter === 70 ? 'بیشتر' : 'بستن';
  return (
    <div>
        <section className='mt-4 container'>
            <span className='fs-4 border-bottom border-2 border-danger pb-2 fw-semibold '>معرفی</span>
            <p className={`mt-4 d-block`}>
                {limitedWords}
            </p>

            <span className='introduce-limiter-button' onClick={clickHandler}>
                 {
                    limiterButton
                 }

                 <BiChevronLeft />
            </span>
        </section>
    </div>
  )
}

export default Introduce
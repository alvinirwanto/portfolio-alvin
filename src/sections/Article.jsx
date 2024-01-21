import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

export default function Article() {

    const [articles, setArticles] = useState()

    async function fetchData() {
        try {
            const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@irwantoalvin')
            const data = response?.data?.items;
            setArticles(data);


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className='py-[5rem] text-white-primary'>
            <div className='flex flex-col xl:flex-row justify-end items-start xl:items-center gap-8 mb-[5rem]'>
                <div className='bg-white-primary w-[25%] h-[2px] z-[20]' />
                <h2 className='text-2xl md:text-4xl font-semibold uppercase font-space'>My Articles</h2>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {
                    articles?.map((article, i) => (
                        <Link key={i} href={article.guid} target='_blank' className={i === articles.length - 1 ? 'hidden' : 'flex flex-col gap-4'}>
                            {article.content && (
                                <>
                                    {(() => {
                                        const parser = new DOMParser();
                                        const doc = parser.parseFromString(article.description, 'text/html');
                                        const firstImg = doc.querySelector('img');
                                        return firstImg ? <Image className='w-full h-[15rem] object-cover' src={firstImg.getAttribute('src')} height={500} width={500} alt='thumbnail' /> : null;
                                    })()}
                                </>
                            )}
                            <div className='flex flex-col gap-4'>
                                <span className='font-semibold text-lg line-clamp-2'>{article.title}</span>
                                {article.description && (
                                    <>
                                        {(() => {
                                            const parser = new DOMParser();
                                            const doc = parser.parseFromString(article.description, 'text/html');
                                            const firstParagraph = doc.querySelector('p');
                                            return firstParagraph ? (
                                                <p className='line-clamp-2'>{firstParagraph.textContent}</p>
                                            ) : (
                                                null
                                            );
                                        })()}
                                    </>
                                )}
                                <div className='flex justify-between'>
                                    {
                                        article?.categories?.map((category, i) => (
                                            <div key={i} className='bg-blue-500 py-1 px-3'>{category}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>

    )
}
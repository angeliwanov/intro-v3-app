import style from './style.module.css'

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div>
      <h1 className={style.title}>My Docs Page</h1>
      <h2>Params {params.id}</h2>
      <h2>SearchParams {Object.keys(searchParams)[0]}</h2>
    </div>
  )
}

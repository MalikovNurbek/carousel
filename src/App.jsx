import { useRef, useState } from 'react'
import { Avatar, Button, Carousel, Progress } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import {
  LeftOutlined,
  MessageOutlined,
  RightOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import style from './App.module.css'

const feedbacks = [
  {
    id: 0,
    description:
      "Пользуюсь программой уже три года. Все отлично работает, спасибо! 000",
    author: "Костин Родион",
    date: "11 августа 2021",
  },
  {
    id: 1,
    description:
      "Пользуюсь программой уже три года. Все отлично работает, спасибо! 111",
    author: "Мали",
    date: "11 августа 2021",
  },
  {
    id: 2,
    description:
      "Пользуюсь программой уже три года. Все отлично работает, спасибо! 222",
    author: "Бека",
    date: "11 августа 2021",
  },
  {
    id: 3,
    description:
      "Пользуюсь программой уже три года. Все отлично работает, спасибо! 333",
    author: "Бека",
    date: "11 августа 2021",
  },
  {
    id: 4,
    description:
      "Пользуюсь программой уже три года. Все отлично работает, спасибо! 444",
    author: "Бека",
    date: "11 августа 2021",
  },
  {
    id: 5,
    description:
      "Пользуюсь программой уже три года. Все отлично работает, спасибо! 555",
    author: "Бека",
    date: "11 августа 2021",
  },
]

const App = () => {
  const ref = useRef()
  const [percent, setPercent] = useState(100 / feedbacks.length)
  const [page, setPage] = useState(1)

  const increase = () => {
    const initialLength = 100 / feedbacks.length
    if (percent === 100) {
      setPercent(initialLength)
      setPage(1)
      return
    }
    let newPercent = percent + initialLength
    if (newPercent > 100) {
      newPercent = 100
    }
    setPercent(newPercent)
    setPage(page + 1)
  }
  const decline = () => {
    const InitialLength = 100 / feedbacks.length
    let newPercent = percent - InitialLength
    setPage(page - 1)
    if (Math.ceil(newPercent) < InitialLength) {
      newPercent = 100
      setPage(feedbacks.length)
    }
    setPercent(newPercent)
  }

  const prev = () => {
    decline()
    ref.current.prev()
  }
  const next = () => {
    increase()
    ref.current.next()
  }

  const getFirstWord = (str) => {
    return str
      .split(" ")
      .map((item) => item.slice(0, 1).toUpperCase())
      .join(" ")
  }

  return (
    <div className={style.root}>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <div>Отзывы пользователей</div>
          <Button
            className={style.headerButton}
            type="link"
            icon={<MessageOutlined />}
          >
            Оставить отзыв
          </Button>
        </div>

        <Carousel
          ref={ref}
          dots={true}
          dotPosition="bottom"
          nextArrow={<h1>12</h1>}
        >
          {feedbacks.map(({ id, description, date, author }) => (
            <div key={id}>
              <div className={style.cardBody}>
                <Avatar className={style.cardAvatar} size={80}>
                  {getFirstWord(author)}
                </Avatar>
                <div className={style.carouselContent}>
                  <div>{date}</div>
                  <div>{description}</div>
                  <div>{author}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className={style.cardFooter}>
          <Progress percent={percent} showInfo={false} />
          <ButtonGroup className={style.buttonBox}>
            <Button type="link" onClick={prev} icon={<LeftOutlined />}></Button>
            <div className={style.paginationBox}>
              <b>{page}</b>
              <span>/ {feedbacks.length}</span>
            </div>
            <Button
              type="link"
              onClick={next}
              icon={<RightOutlined />}
            ></Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default App

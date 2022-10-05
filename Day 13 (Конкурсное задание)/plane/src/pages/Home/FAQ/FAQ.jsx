import React from 'react'
import { Accordion } from 'flowbite-react'

const FAQ = () => {
  return (
    <div className='container my-24'>
      <h1 className='text-3xl font-medium text-center mb-12'>Часто задаваемые вопросы</h1>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
            Какая нам от этого выгода?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              В основном наш заработок идет от процентов с продаж билетов, но так же определенную часть материальных средств мы получаем от государства
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Почему именно мы?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Мы являемся крупнейшей компанией в нашей стране в рамках нашего направления, соответственно получаем большое количество инвестиций со стороны предпренимателей а так же получаем поддержку от государства что позволяет нам создавать все возможные удобства для наших клиентов при этом не теряя качетво обслуживания
            </p>

          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Как попасть к нам в команду?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Как и в других крупных компаниях по всему миру, не смотря на уже имеющийся большой штат сотрудников, мы испытываем нехватку некоторых из них. По этому каждый желающий может начать у нас работать, если он подходит под наши криттерии для трудоустройства
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

    </div>
  )
}

export default FAQ
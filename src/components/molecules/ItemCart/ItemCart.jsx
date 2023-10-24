import { ImageCircle } from '../../atoms/ImageCircle/ImageCircle'

import { ButtonCard } from '../../atoms/ButtonCard/ButtonCard'
import { Description } from '../../atoms/Description/Description'
import { useTheme } from 'styled-components';
import { ItemCartStyled, ContentInfoFooter, Close } from './styles'

export const ItemCart = () => {
    const theme = useTheme()

    return <ItemCartStyled>

        <ImageCircle imgCircle={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbWGESuQbOlJZDYiJGLwuuANZ9VvTFYugYOYBBBhT2O4FsK4tq3V_kQpmBr94_T-q4Fg&usqp=CAU'} />
        <div>
            <Description text={"Bulldog Frances"} color={'secondary'} bold={true} />

            <ContentInfoFooter>
                <Description text={"$1000"} color={'primary'} />
                <div>
                    <select>
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4
                        </option>
                        <option>
                            5
                        </option>
                        <option>
                            6
                        </option>
                        <option>
                            7
                        </option>
                        <option>
                            8
                        </option>
                        <option>
                            9
                        </option>
                        <option>
                            10
                        </option>
                    </select>
                </div>
            </ContentInfoFooter>
        </div>

        <Close>
            <ButtonCard text={"X"} theme={theme.danger} color={theme.danger} />
        </Close>
    </ItemCartStyled>
}

// styles 
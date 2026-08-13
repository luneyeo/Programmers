-- 코드를 입력하세요
-- 중성화 된 동물 구분, O 또는 X로 추출
-- 동물 아이디, 이름, 여부 추출
-- 아이디 순으로 추출
SELECT
    ANIMAL_ID
    , NAME
    , CASE
        WHEN SEX_UPON_INTAKE LIKE 'Neutered%' OR SEX_UPON_INTAKE LIKE 'Spayed%' THEN 'O'
        ELSE 'X'
        END AS SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
import pandas as pd
import addSongs
import getData
import re


def getPop(items: list):

    df = pd.DataFrame(items)

    n = 5
    df = df.apply(lambda x: pd.Series(x.value_counts().index[:n]))

    col_list = df[df.columns[0]].values.tolist()

    return col_list

addSongs.addFromList(getData.getSongs())






    
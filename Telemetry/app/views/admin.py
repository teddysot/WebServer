"""
VFS Demo App
Copyright (C) 2014 Kibble Games Inc. In cooperation with Vancouver Film School All Rights Reserved. 

"""
import logging

from app.models.user import User

# this is the parent class of all pages that need to respond to AJAX messages
from app.views.page_controller import PageController


"""
Admin Page handler

"""


class AdminPage(PageController):

    def get(self):
        records = get_all_recs()
        tValues = {
            'subtitle': "Admin",
            #'record_list_markup': format_recs(self, records)
        }
        self.send_html('../templates/admin.html', tValues)
        return


def get_all_recs():
    return [
        {
            'session': "1",
            'gameaction': "3"
        },
        {
            'session': "2",
            'gameaction': "4"
        },
    ]


#def format_recs(records_list):
    #markup = []
    #i = 0
    #for rec in records_list:
        #markup[i] = self.send_html("../templates/partials/item.html", rec)
